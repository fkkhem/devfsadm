

root user password break using single user mode : 
	
	1. Reboot the machine
	2. Press down arrow
	3. Select the rescue kernel 
	4. Write rd.break in the end of line that start with "Linux" keyword
	5. Press Ctrl+x to start the machine
		
		# mount -o remount rw /sysroot
		# chroot /sysroot
		# passwd 
			password
			confirm password
		# touch /.autorelabel
		# exit 
		# exit 
		
	If grub menu boots any kernel automatically then make changes in file 
	# vim /etc/default/grub
		GRUB_TIMEOUT=10
		:wq
		
================================================================================

Configure hostname and IP address with getway and DNS server IP : 
	Hostname : servera.lab.example.com
	IP 		 : 192.168.131.130
	Netmask	 : 255.255.255.0
	Getway	 : 192.168.131.1
	DNS		 : 192.168.131.1
	Domain	 : lab.example.com
	
	# hostnamectl => to verify the hostname
	# hostnamectl set-hostname servera.lab.example.com
	# cat /etc/hostname => to verify the hostname
	
	# nmcli connection show 
	# nmcli connection delete ens160 
	# nmcli connection add con-name ens160 ifname ens160 type ethernet autoconnect yes ip4 192.168.131.130/24 gw4 192.168.131.1 ipv4.dns 192.168.131.1
	# nmcli connection show
	# ifconfig 
	# ip a
	# ip route => to verify the getway entry 
	# cat /etc/resolv.conf => to verify the DNS entry 
	
	
===================================================================================

Configure a yum repo with given URL : 
	
	# cat /etc/yum.repos.d/exam.repo 
		[url1]
		name=first_url
		baseurl=http://classroom1.example.com
		enable=1
		gpgcheck=0
		[url2]
		name=second_url
		baseurl=http://classroom2.example.com
		enable=1
		gpgcheck=0
		:wq
		
	# dnf clean all
	# dnf repolist all
	
===================================================================================
Create a group "manager"
Create a user "natasha" who has "manager" as a secondary group 
Create a user "harry" who has "manager" as a secondary group
Create a user "sarah" who does not have access to an interactive shell on the system, and not a member of "manager" group
Users "natasha", "harry" and "sarah" must have password as "123" 

	# groupadd manager 
	# grep manager /etc/group
	
	# useradd -G manager natasha
	# grep natasha /etc/passwd 
	# id -a natasha
	# passwd natasha
	
	# useradd -G manager harry
	# grep harry /etc/passwd
	# id -a harry
	# passwd harry
	
	# useradd -s /sbin/nologin sarah
	# grep sarah /etc/passwd
	# id -a sarah
	# passwd sarah
	# su - sarah
	
	# grep manager /etc/group
	
====================================================================================
Create a collaborative directory /home/contrib with the following characteristics : 
	Group ownership of /home/contrib is manager 
	The directory should be readable, writable and accessable to members of manager group but not to any other user
	Files created in /home/contrib automatically have group ownershipset to the manager group 
	
	# mkdir /home/contrib
	# ls -ld /home/contrib
	# chgrp manager /home/contrib
	# ls -ld /home/contrib
	# chmod 770 /home/contrib
	# ls -ld /home/contrib
	# chmod 2770 /home/contrib
	# ls -ld /home/contrib
	
====================================================================================
Create a user jean with a user id of 4332
The password of this user should be 123

	# useradd -u 4332 jean 
	# passwd jean 
	# id -a jean 
	# grep jean /etc/passwd
	
====================================================================================
The user natasha must configure a cron job that runs daily at 14:23 local time and execute /bin/echo hello 

The user natasha must configure a cron job that runs every minute and execute /usr/bin/echo hello

	# crontab -e -u natasha
		23	14	*	*	*	/bin/echo	hello
		*/1	*	*	*	*	/usr/bin/echo	hello
		:wq
	# crontab -l -u natasha
	
====================================================================================
Find all the lines in the file /usr/share/dict/words that contains the string "star".
Put a copy of all these lines in the original order in the file /root/lines.txt
/root/lines.txt file should not contain any empty line and all line must be exact copies of the original lines in /usr/share/dict/words

	# grep star /usr/share/dict/words > /root/lines.txt 
	# cat /root/lines.txt
	
====================================================================================
Create a tar archive name /root/data.tar.bz2 which contains the content of /usr/local

	# tar -cjvf /root/data.tar.bz2 /usr/local
	
	gunzip	.gz  -z
	bunzip2 .bz2 -j
	xz		.xz  -J

====================================================================================
Configure your system so that it is an NTP client of time.google.com

	# systemctl status chronyd 
	# systemctl start chronyd
	# systemctl enable chronyd
	
	# vim /etc/chrony.conf 
		#pool2.rhel.pool.ntp.org iburst => commnet this line if it is uncommented 
		server time.goole.com iburst
		:wq
	# systemctl restart chronyd
	# timedatectl 
	# chronyc sources 

====================================================================================
Choose the recommanded tuned profile for the system and set it as the default 

	# dnf install tuned 
	# systemctl start tuned.service
	# systemctl enable tuned.service
	# tuned-adm list 
	# tuned-adm active 
	# tuned-adm recommanded
	# tuned-adm profie virtual-guest
	# tuned-adm active

====================================================================================
Find all the files with .conf extention in /etc directory and copy all files name in /search file : 
	
	# find /etc -name ".conf" > /search
	# cat /search
	
====================================================================================
Locate all uncommented lines in file /etc/sudoers and copy the lines in same order in /root/uncommented file 
	
	# grep ^[^#] /etc/sudoers > /root/uncommented
	
Locate all commented lines in file /etc/sudoers and copy the lines in same order in /root/commented file 	
	
	# grep ^[#] /etc/sudoers > /root/commented
	
====================================================================================
A web server running on non-standard port 82 is having issues serving content.
Debug and fix the issues as necessary so that : 
	The web server on your system can server all the existing HTML files from /var/www/html
	The web server serves this content on port 82
	The web server starts automatically at system boot time 
	
	# firewall-cmd --permanent --add-port=82/tcp 
	# firewall-cmd --reload 
	# firewall-cmd --permanent --list-port
	
	# netstat -tunlp | grep http 
	# getenforce 
	# semanage port -l | grep http
	# semanage port -a -t http_port_t -p tcp 82
	# semanage port -l | grep http 
	
	# systemctl restart httpd
	# systemctl enable httpd 
	# systemctl status httpd
	
	# netstat -tunlp | grep http 
====================================================================================
Copy the file /etc/fstab to /var/tmp directory
Configure the permission of /var/tmp/fstab so that 
	The file /var/tmp/fstab is owned by the root user 
	The file /var/tmp/fstab is belongs to root group 
	The file /var/tmp/fstab shoud not be executable by anyone 
	The user harry is able to read and write /var/tmp/fstab file 
	The user natasha can neither write or read /var/tmp/fstab file 
	All other user (current or future) have the ability to read /var/tmp/fstab file 
	
	# cp /etc/fstab /var/tmp 
	# ls -ll /var/tmp/fstab
	
	# getfacl /var/tmp/fstab
	# setfacl -m -u:harry:rw- /var/tmp/fstab
	# setfacl -m -u:natasha:--- /var/tmp/fstab
	# ls -ll /var/tmp/fstab
	# getfacl /var/tmp/fstab
	
====================================================================================
Enable sudo access for members of group admin without entering their password : 
	
	# vim /etc/sudoers 
		%admin	ALL=(ALL)	NOPASSWD: ALL
		:wq!
	
====================================================================================
Configure permissions for user daffy such that 
	All newly created files for user daffy should have -rw-r----- as the default permission
	All newly created directory for the same user should have drwxr-x--- as the default permission
	
	# su - daffy
	
	$ vim .bashrc 
		umask 026
		umask 027
		:wq
		
	For file 666-640=026
	For directory 777-750=027
	
	$ touch file
	$ ls -ll file 
	
	$ mkdir dir 
	$ ls -ld dir 
	
====================================================================================
Find all the files in /usr/bin with size less than 5MB and save these files inside /home/manage directory : 
	
	# mkdir /home/manage
	# find /usr/bin -size 5M -exec cp -rf {} /home/manage \;
	# ls -ltrh /home/manage
	
Create a shell script file to find all the files in /usr/bin with size less than 5MB and more than 2Mb and save these files inside /home/manage directory :

	# vim query.sh 
		#!/bin/bash
		mkdir /home/manage
		find /usr/bin -size +2M -size -5M -exec cp -rf {} /home/manage \;
		:wq
	
====================================================================================

====================================================================================

====================================================================================

====================================================================================		
		