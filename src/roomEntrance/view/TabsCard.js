import { Card } from "antd";
import React from "react";
import Timer from "./Timer";
import { Checkbox } from "antd";
import RoomMember from "./RoomMember";
import TodoContainer from "../../myPage/container/TodoContainer";
import { inject, observer } from "mobx-react";

const tabListNoTitle = [
  {
    key: "my_todo_list",
    tab: "할 일",
  },
  {
    key: "notice_board",
    tab: "공지",
  },
  {
    key: "member",
    tab: "멤버",
  },
];
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class TabsCard extends React.Component {
  state = {
    name: "hello",
  };
  member() {
    this.props.mySocket.on("방 멤버", (res) => {
      console.log("test" + res + "test");
      this.setState({ name: res });
      console.log("test" + this.state.name + "test");
    });
  }

  state = {
    noTitleKey: "my_todo_list",
    contentListNoTitle: {
      my_todo_list: <TodoContainer owner={this.props.owner} />,
      notice_board: (
        <div>
          {this.props.roomData.description.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      ),
      member: (
        <>
          {/* <RoomMember
                        mySocket={this.props.mySocket}
                    /> */}
          <div>{this.state.name}</div>
        </>
      ),
    },
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
        <Card
          // headStyle={{ backgroundColor: "snow" }}
          style={{ width: "100%", height: "540px" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
          {this.state.contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </>
    );
  }
}
export default TabsCard;
