import { Card } from "antd";
import React from "react";
import Timer from "./Timer";
import { Checkbox } from "antd";
import ButtonTemplate from "../../icon/view/ButtonTemplate";

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
        noTitleKey: "my_todo_list",
        contentListNoTitle: {
            // timer: <Timer mySocket={this.props.mySocket} owner={this.props.owner} room={this.props.room}/>,
            my_todo_list: <Checkbox onChange={onChange}>todo....</Checkbox>,
            notice_board: (
                <div style={{ minHeight: "300px", position: "relative" }}>
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
            member: <p>멤버~~</p>,
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
                    style={{ width: "100%", height: "40rem" }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => {
                        this.onTabChange(key, "noTitleKey");
                    }}
                >
                    {this.state.contentListNoTitle[this.state.noTitleKey]}
                    {this.state.noTitleKey === "notice_board" ? (
                        <ButtonTemplate
                            style={{
                                position: "absoulte",
                                bottom: 0,
                                float: "right",
                            }}
                            text={"수정"}
                        />
                    ) : null}
                </Card>
            </>
        );
    }
}
export default TabsCard;
