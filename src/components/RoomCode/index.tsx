import "./style.scss";

import copyImg from "../../assets/images/copy.svg";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy Room Code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
