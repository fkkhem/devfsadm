To check all physical volumes with size and status : 
[root@localhost ~]# pvs
  PV         VG Fmt  Attr PSize PFree
  /dev/sdc1     lvm2 ---  2.00g 2.00g
  /dev/sdc2     lvm2 ---  3.00g 3.00g
[root@localhost ~]#

To check a particular physical volume with size and status : 
[root@localhost ~]# pvs /dev/sdc1
  PV         VG Fmt  Attr PSize PFree
  /dev/sdc1     lvm2 ---  2.00g 2.00g
[root@localhost ~]#



To create new physical volume : 
[root@localhost ~]# pvcreate /dev/sdc1
  Physical volume "/dev/sdc1" successfully created.
  Creating devices file /etc/lvm/devices/system.devices
[root@localhost ~]#



To display brief infromatin about all physical volumes : 
[root@localhost ~]# pvdisplay
  "/dev/sdc1" is a new physical volume of "2.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sdc1
  VG Name
  PV Size               2.00 GiB
  Allocatable           NO
  PE Size               0
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               Ljv3ch-lc7I-F1hu-2nbp-xU2j-ypx9-2rrhFe
[root@localhost ~]#



To display brief infromatin about a particular physical volume : 
[root@localhost ~]# pvdisplay /dev/sdc2
  "/dev/sdc2" is a new physical volume of "3.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sdc2
  VG Name
  PV Size               3.00 GiB
  Allocatable           NO
  PE Size               0
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               wHSWqM-xLYB-hyIi-gdc9-54C5-gx6M-I3H6RK
[root@localhost ~]#



To create a volume group : 
[root@localhost ~]# vgcreate myvg1 /dev/sdc1 /dev/sdc2
  Volume group "myvg1" successfully created
[root@localhost ~]#

Note: To add a new volume group we need minimum one physical volume to add in it.
Note: By default volume gorup will be created with PE (physical extent) size of 4MB.

To create a volume group with custom physical extent size : 
[root@localhost ~]# vgcreate -s 8M myvg2 /dev/sdc3
  Physical volume "/dev/sdc3" successfully created.
  Volume group "myvg2" successfully created
[root@localhost ~]# 
In this case, the size of PE will be 8MB.



To check all volume groups status : 
[root@localhost ~]# vgcreate myvg1 /dev/sdc1 /dev/sdc2
  Volume group "myvg1" successfully created
[root@localhost ~]#


To check a particular volume group status : 
[root@localhost ~]# vgs myvg1
  VG    #PV #LV #SN Attr   VSize VFree
  myvg1   2   0   0 wz--n- 4.99g 4.99g
[root@localhost ~]#



To see brief details of all volume groups : 
[root@localhost ~]# vgdisplay
  --- Volume group ---
  VG Name               myvg1
  System ID
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               4.99 GiB
  PE Size               4.00 MiB
  Total PE              1278
  Alloc PE / Size       0 / 0
  Free  PE / Size       1278 / 4.99 GiB
  VG UUID               ALH0tl-1LEG-fuHs-Gk3W-0xAk-4tIt-YF6KVw
[root@localhost ~]#




To see brief detail of a particular volume group : 
[root@localhost ~]# vgdisplay myvg1
  --- Volume group ---
  VG Name               myvg1
  System ID
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               4.99 GiB
  PE Size               4.00 MiB
  Total PE              1278
  Alloc PE / Size       0 / 0
  Free  PE / Size       1278 / 4.99 GiB
  VG UUID               ALH0tl-1LEG-fuHs-Gk3W-0xAk-4tIt-YF6KVw
[root@localhost ~]#





To create a logcal volume with given size : 
[root@localhost ~]# lvcreate -L +1G -n mylv1 /dev/myvg1
  Logical volume "mylv1" created.
[root@localhost ~]#


To create a logcal volume with number of logical extent : 
[root@localhost ~]# lvcreate -l 100 -n mylv2 /dev/myvg1
  Logical volume "mylv2" created.
[root@localhost ~]#
This LV has 400MB size because logical extent size of VG myvg1 is 4MB.




To check the status of all logical volumes : 
[root@localhost ~]# lvs
  LV    VG    Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  mylv1 myvg1 -wi-a-----   1.00g
  mylv2 myvg1 -wi-a----- 400.00m
[root@localhost ~]#

To check status of a particular logcal volume : 
[root@localhost ~]# lvs /dev/myvg1/mylv1
  LV    VG    Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  mylv1 myvg1 -wi-a----- 1.00g
[root@localhost ~]#


To see brief infromatin of all logical volumes : 
[root@localhost ~]# lvdisplay
  --- Logical volume ---
  LV Path                /dev/myvg1/mylv1
  LV Name                mylv1
  VG Name                myvg1
  LV UUID                34dqSM-Yf2z-8liR-fnnp-o4RQ-OtDu-stjfWt
  LV Write Access        read/write
  LV Creation host, time localhost.localdomain, 2025-01-05 12:29:52 +0530
  LV Status              available
  # open                 0
  LV Size                1.00 GiB
  Current LE             256
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:0

  --- Logical volume ---
  LV Path                /dev/myvg1/mylv2
  LV Name                mylv2
  VG Name                myvg1
  LV UUID                fKPxoP-CVlb-TiM0-pQap-4P3Q-P4Vc-I1AN1C
  LV Write Access        read/write
  LV Creation host, time localhost.localdomain, 2025-01-05 12:31:42 +0530
  LV Status              available
  # open                 0
  LV Size                400.00 MiB
  Current LE             100
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:1
[root@localhost ~]#


To see brief infromatin of a particular logical volume :
[root@localhost ~]# lvdisplay /dev/myvg1/mylv2
  --- Logical volume ---
  LV Path                /dev/myvg1/mylv2
  LV Name                mylv2
  VG Name                myvg1
  LV UUID                fKPxoP-CVlb-TiM0-pQap-4P3Q-P4Vc-I1AN1C
  LV Write Access        read/write
  LV Creation host, time localhost.localdomain, 2025-01-05 12:31:42 +0530
  LV Status              available
  # open                 0
  LV Size                400.00 MiB
  Current LE             100
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:1
[root@localhost ~]#



To format a logical volume with ext4 : 
[root@localhost ~]# mkfs.ext4 /dev/myvg1/mylv1
mke2fs 1.46.5 (30-Dec-2021)
Creating filesystem with 262144 4k blocks and 65536 inodes
Filesystem UUID: 9e695f65-06f2-4513-a2ea-a2fde0f1cce5
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376

Allocating group tables: done
Writing inode tables: done
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done

[root@localhost ~]#



To format a logical volume with xfs : 
[root@localhost ~]# mkfs.xfs /dev/myvg1/mylv2
meta-data=/dev/myvg1/mylv2       isize=512    agcount=4, agsize=25600 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=102400, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=1368, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
[root@localhost ~]#
Now we can mount these logical volumes on any mount point. 


To mount a logical volume on a mount point : 
[root@localhost ~]# mount /dev/myvg1/mylv1 /data1
[root@localhost ~]# df -Th /data1
Filesystem              Type  Size  Used Avail Use% Mounted on
/dev/mapper/myvg1-mylv1 ext4  974M   24K  907M   1% /data1
[root@localhost ~]#


================================
LVM Size Extend : 
	To extend lvm size no need to unmount the lV 
	we can extend the LV size on run time or while LV is offline 
	To extend the size of LV, there must be available space in respective VG. 
	
To change the size with a given space of a LV : 
[root@localhost ~]# lvresize -L 900M /dev/myvg1/mylv2
  Size of logical volume myvg1/mylv2 changed from 600.00 MiB (150 extents) to 900.00 MiB (225 extents).
  Logical volume myvg1/mylv2 successfully resized.
[root@localhost ~]#
This will change the size of LV mylv2 as new given size 900MB.


To extend size with a given space of a LV : 
[root@localhost ~]# lvresize -L 200M /dev/myvg1/mylv2
  Size of logical volume myvg1/mylv2 changed from 400.00 MiB (100 extents) to 600.00 MiB (150 extents).
  Logical volume myvg1/mylv2 successfully resized.
[root@localhost ~]#
This command will increase the 200MB space of LV mylv2.


To extend the size with logical extend numbers : 
[root@localhost ~]# lvresize -l 200 /dev/myvg1/mylv2
  Size of logical volume myvg1/mylv2 changed from 600.00 MiB (150 extents) to 800.00 MiB (200 extents).
  Logical volume myvg1/mylv2 successfully resized.
[root@localhost ~]#
This command will change the size of mylv2 to 200 logical extent (800MB).

Note: All these given command will change the size of LV but will not synchronise the space with mount point. 
To synchronise the new space with mount point we need to use option '-r' with these commands. 
If we are not using the option -r with above command then we need to run one more command - 

To synchronise the size of LV with mount point for xfs : 
[root@localhost ~]# xfs_growfs /data2
meta-data=/dev/mapper/myvg1-mylv2 isize=512    agcount=4, agsize=25600 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=102400, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=1368, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 102400 to 358400
[root@localhost ~]#


To synchronise the size of LV with mount point for ext4 :
[root@localhost ~]# resize2fs /dev/myvg1/mylv1
resize2fs 1.46.5 (30-Dec-2021)
Filesystem at /dev/myvg1/mylv1 is mounted on /data1; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 1
The filesystem on /dev/myvg1/mylv1 is now 524288 (4k) blocks long.
[root@localhost ~]# 


To resize LV and synchronise the size with mount point : 
[root@localhost ~]# lvresize -l 125 -r /dev/myvg1/mylv1
  Size of logical volume myvg1/mylv1 changed from 400.00 MiB (100 extents) to 500.00 MiB (125 extents).
  Logical volume myvg1/mylv1 successfully resized.
resize2fs 1.46.5 (30-Dec-2021)
Filesystem at /dev/mapper/myvg1-mylv1 is mounted on /data1; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 1
The filesystem on /dev/mapper/myvg1-mylv1 is now 128000 (4k) blocks long.

[root@localhost ~]# lvs /dev/myvg1/mylv1
  LV    VG    Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  mylv1 myvg1 -wi-ao---- 500.00m
[root@localhost ~]# df -Th /data1
Filesystem              Type  Size  Used Avail Use% Mounted on
/dev/mapper/myvg1-mylv1 ext4  460M  1.6M  433M   1% /data1
[root@localhost ~]#
