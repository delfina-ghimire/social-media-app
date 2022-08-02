import { Modal, useMantineTheme } from '@mantine/core';
import '../../pages/Auth/Auth.css';

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className='infoForm'>
        <h2>Your Info</h2>

        <div>
          <input
            type='text'
            className='infoInput'
            name='FirstName'
            placeholder='First Name'
          />

          <input
            type='text'
            className='infoInput'
            name='LastName'
            placeholder='Last Name'
          />
        </div>

        <div>
          <input
            type='text'
            className='infoInput'
            name='worksAt'
            placeholder='Works at'
          />
        </div>

        <div>
          <input
            type='text'
            className='infoInput'
            name='LivesIn'
            placeholder='Lives In'
          />

          <input
            type='text'
            className='infoInput'
            name='Country'
            placeholder='Country'
          />
        </div>

        <div>
          <input
            type='text'
            className='infoInput'
            placeholder='Relationship Status'
          />
        </div>

        <div>
          Profile Image
          <input type='file' name='profileImg' />
          Cover Image
          <input type='file' name='coverImg' />
        </div>

        <button className='btn btn--info'>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
