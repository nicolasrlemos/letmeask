import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCodeProps = {
  roomCode: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipbord() {
    navigator.clipboard.writeText(props.roomCode);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipbord}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.roomCode}</span>
    </button>
  );
}
