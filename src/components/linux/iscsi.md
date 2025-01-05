
---

### SCSI & iSCSI Server Configuration Guide  
---

#### **Introduction**  
SCSI and iSCSI are commonly used technologies in a **Storage Area Network (SAN)** environment. They allow the sharing of storage disks between servers over a network, enabling dynamic attachment of storage resources to servers in real time without requiring downtime.

- **SCSI (Small Computer System Interface)**: Refers to the system or node providing storage resources.  
- **iSCSI (Internet Small Computer System Interface)**: Refers to the client or initiator node consuming the shared storage.

#### **What is SAN?**  
A **Storage Area Network (SAN)** is a dedicated network providing access to shared storage resources. It is optimized for high-speed data transfers and offers centralized storage management.

#### **Key Concept**:  
- **IQN (iSCSI Qualified Name)**: A globally unique identifier for iSCSI targets.  
  The format for IQN is as follows:  
  ```plaintext
  iqn.<year>-<month>.<root_domain>.<sub_domain>:<disk_unique_name>
  Example: iqn.2024-12.com.example:disk1
  ```

#### **High-Level Workflow**:  
1. The **SCSI server** shares the disk (or partition) as a network-accessible drive.  
2. The **iSCSI client** discovers the shared disk and retrieves its IQN.  
3. The iSCSI client logs in to the target disk using ACL (Access Control List) credentials, attaches it, and formats it according to its requirements.  

---

### **SCSI Server Configuration (Target Server)**  

#### **Overview**  
The SCSI server provides storage to iSCSI clients dynamically over the network. It exposes raw or blank disks so that the client can decide on the filesystem.

#### **Configuration Details**  
- **Package**: `targetcli`  
- **Daemon**: `target`  
- **Command**: `targetcli`  
- **Port**: 3260 (default iSCSI port)  
- **Configuration File**: `/etc/target/saveconfig.json`  
- **Log File**: `/var/log/messages`  

#### **Step-by-Step Configuration**  

1. **Install the required package**:  
   ```bash
   # yum install targetcli -y
   ```

2. **Start and enable the SCSI target service**:  
   ```bash
   # systemctl start target
   # systemctl enable target
   ```

3. **Allow SCSI port through the firewall**:  
   ```bash
   # firewall-cmd --permanent --add-port=3260/tcp
   # firewall-cmd --reload
   ```

4. **Create a partition from a disk for sharing**:  
   Use the `targetcli` command to manage the SCSI target configuration.  

   - Open the **targetcli** prompt:  
     ```bash
     # targetcli
     ```

   - Create a block device:  
     ```bash
     > /backstore/block create <device_name> <path_to_disk>
     Example: /backstore/block create mydrive1 /dev/sdb1
     ```

   - Create an **IQN (iSCSI Qualified Name)**:  
     ```bash
     > /iscsi create iqn.2024-12.com.example:disk1
     ```
     This automatically creates a **TPG (Target Portal Group)**.  

   - Set up ACL for the IQN:  
     ```bash
     > /iscsi/iqn.2024-12.com.example:disk1/tpg1/acls create iqn.2024-12.com.example:client1
     ```

   - Map the created device to the IQN:  
     ```bash
     > /iscsi/iqn.2024-12.com.example:disk1/tpg1/luns create /backstore/block/mydrive1
     ```

   - (Optional for RHEL 6 or earlier) Create a portal:  
     ```bash
     > /iscsi/iqn.2024-12.com.example:disk1/tpg1/portals create <server_IP>
     ```

5. **Save the configuration and restart the target service**:  
   ```bash
   > exit
   # systemctl restart target
   ```

---

### **iSCSI Client Configuration (Initiator Server)**  

#### **Overview**  
The iSCSI client node connects to the storage shared by the SCSI server. It discovers available disks and maps them as local devices.

#### **Configuration Details**  
- **Package**: `iscsi-initiator-utils`  
- **Daemon**: `iscsid`  
- **Command**: `iscsiadm`  
- **Configuration File**: `/etc/iscsi/initiatorname.iscsi`  
- **Log File**: `/var/log/messages`  

#### **Step-by-Step Configuration**  

1. **Install the iSCSI initiator package**:  
   ```bash
   # yum install iscsi-initiator-utils -y
   ```

2. **Configure the ACL token in the configuration file**:  
   ```bash
   # vim /etc/iscsi/initiatorname.iscsi
   ```
   Add the following line:  
   ```plaintext
   InitiatorName=iqn.2024-12.com.example:client1
   ```

3. **Discover the iSCSI target**:  
   ```bash
   # iscsiadm -m discovery -t st -p <SCSI_server_IP>
   ```
   This lists all shared disks along with their IQNs.  

4. **Login to the target IQN**:  
   ```bash
   # iscsiadm -m node -T iqn.2024-12.com.example:disk1 -l
   ```
   This maps the disk to the iSCSI client.  

5. **Verify the attached disk**:  
   - Check the block devices:  
     ```bash
     # lsblk -fs
     ```
   - Check the disk protocol:  
     ```bash
     # lsblk -S
     ```

6. **Create a filesystem and mount the disk**:  
   Format the disk and mount it for use.  
   ```bash
   # mkfs.ext4 /dev/<disk>
   # mount /dev/<disk> /mnt
   ```

7. **Make the mount persistent**:  
   Add an entry in `/etc/fstab` with the `_netdev` option:  
   ```plaintext
   /dev/<disk>  /mnt  ext4  defaults,_netdev  0  0
   ```

8. **To view active sessions**:  
   ```bash
   # iscsiadm -m session -P 3
   ```

9. **To log out from the target IQN**:  
   ```bash
   # iscsiadm -m node -T iqn.2024-12.com.example:disk1 -u
   ```

10. **To delete the iSCSI target connection**:  
    ```bash
    # iscsiadm -m node -T iqn.2024-12.com.example:disk1 -o delete
    ```

---

### **Additional Notes**  
- If a disk is disconnected, it can be remapped without data loss using the discovery and login process.  
- Logs related to disk activity can be checked using:  
  ```bash
  # dmesg
  ```

--- 

