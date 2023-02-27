import "./sendingbar.component.scss";
import { ReactComponent as Sending } from "@/assets/icons/Sending.svg";

function SendingBar() {
  return (
    <div className="sending">
      <input
        type="text"
        className="search--input"
        placeholder="Nhập gmail của bạn"
      />
      <div className="icon">
        <Sending className="icon--search" />
      </div>
    </div>
  );
}

export default SendingBar;
