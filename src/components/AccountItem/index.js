import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem(props) {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/326418458_748746973109068_2363354799698096349_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=stmwYhVMI_oAX_ECIO3&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDis2sr_nRPnRY91ysKgo4k4kV073kHId1zMrz6c0ChyQ&oe=63FF25A0"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
