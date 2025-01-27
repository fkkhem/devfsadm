import React from 'react';
import { img_base_url } from '../Config';
import YouTubeVideo from '../utils/YouTubeVideo';

const UserManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold text-red-500 mt-5 ml-2'>User Management in Solaris</h2>
        <p className='ml-2 mt-3'>
          In Solaris, user management involves creating, modifying, and deleting user accounts, as well as managing user attributes.        </p>

      </div>

      <YouTubeVideo video_id={`M1tZMiTUpcw`} />

      <div className='mb-4 ml-2 mt-10'>
        <p> Here are some important files in user management:
          <li className='font-bold'> /etc/passwd</li>
          <li className='font-bold'> /etc/shadow</li>
        </p>
        <p className='mt-5 font-bold text-red-500'>
          1. To get All User's Information:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`cat /etc/passwd`} </p>
        <img src={`${img_base_url}oym12gxwlmiccqxcz1ad.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />

        <p className='mt-5 font-bold text-red-500'>
          2. To get All User's Information in Password encrypted form:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`cat /etc/shadow`} </p>
        <p>
          It contains user management information in Password encrypted format.
        </p>
        <img src={`${img_base_url}zmygl6o92p5niak9sgsb.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />

        <p className='mt-5 font-bold text-red-500'>
          3. To check Password policy Information:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`cat /etc/default/passwd`} </p>
        <img src={`${img_base_url}woxuwkkpcmukmyopzpe4.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />

        <p className='mt-5 font-bold text-red-500'>
          4. To get copy of Password policy Information:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`cat /etc/opasswd`} </p>
        <p>
          It use to recover <sapn className='font-bold'> /etc/passwd</sapn> file, if deleted by mistake.
        </p>
        <img src={`${img_base_url}wa0nj9n1vbgq3xuljh7e.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />

        <p className='mt-5 font-bold text-red-500'>
          5. To recover the shadow file:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`pwconv`} </p>
        <p>
          It use to recover <sapn className='font-bold'> shadow </sapn> file, if deleted by mistake.
        </p>
        <p>
          After recovered the shadow file we have to set the root Password using command <span className='font-bold' >passwd root</span>.
        </p>
        <img src={`${img_base_url}rfngt4zbztopn6facyz6.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <hr className='my-3 ml-4' />
      <p className='ml-4 my-3 mt-5 font-bold'>
        Here are some common commands for user management in Solaris:
      </p>
      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold text-red-500'>
          1. Creating a User:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`useradd <user_name>`} </p>
        <img src={`${img_base_url}ximpj402bn5ked8fbg8j.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          2. Creating a User with Custom Info:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`useradd -u <UID> -g <GID> -c <comment> -m -d <home_dir> <user_name>`} </p>
        <img src={`${img_base_url}kfsgvdkzvpzncqnfgxea.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          3. To Modify the User Name:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`usermod -l <new_user_name> <old_user_name>`} </p>
        <img src={`${img_base_url}zl2im2rqscfafsawa2ik.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          4. To Modify the User ID:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`usermod -u <new_ID> <user_name>`} </p>
        <img src={`${img_base_url}csvtb4teygdxrm9dtyjm.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          5. To Modify the User's Group:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`usermod -g <new_GID> <user_name>`} </p>
        <img src={`${img_base_url}byrnnjopeuhwbni47imt.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          6. To Modify the User's Comment:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`usermod -c <new_comment> <user_name>`} </p>
        <img src={`${img_base_url}prnzxvcvebxw5qvmwvqd.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          7. To Modify the User's Home Directory:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`usermod -d <new_dir> <user_name>`} </p>
        <img src={`${img_base_url}gktfyeld7inkknompss1.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          8. To Modify the User's Shell:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`usermod -s <new_shell> <user_name>`} </p>
        <img src={`${img_base_url}mo6c1zhchcdxxsglb27d.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          9. To Delete a User without home directory:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`userdel <user_name>`} </p>
        <img src={`${img_base_url}nujnysxsgwbqmybl1okq.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          10. To Delete a User along with Home Directory:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`userdel -r <user_name>`} </p>
        <img src={`${img_base_url}rovbdvotocbcsrbqtsmc.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          11. To User's Password:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`passwd <user_name>`} </p>
        <img src={`${img_base_url}chs9iokqelbs78iqu7oy.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          12. To check User's Password Status:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`passwd -s <user_name>`} </p>
        <img src={`${img_base_url}edsqugjxzi5tqrruzwgm.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          13. To lock a User:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`passwd -l <user_name>`} </p>
        <img src={`${img_base_url}lrzlmhkon2vfqs3chb7y.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          14. To unlock a User:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`passwd -u <user_name>`} </p>
        <img src={`${img_base_url}poito4lmt8xm7htcwnsw.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          15. To Delete Password of a User:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`passwd -d <user_name>`} </p>
        <img src={`${img_base_url}amblu0hsq4cvho5vnhri.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          16. To get User Information:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`id <user_name>`} </p>
        <img src={`${img_base_url}ffwmoj5ngcttkxevzu27.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold text-red-500'>
          17. To get User Information along with secondary group:
        </p>
        <p className=' font-bold ml-5 text-violet-600'> {`id -a <user_name>`} </p>
        <img src={`${img_base_url}fnxkbwkob3fczckafbxz.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

    </div>
  );
};

export default UserManagement;