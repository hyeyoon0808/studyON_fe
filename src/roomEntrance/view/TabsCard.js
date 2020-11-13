import { Card } from "antd";
import React from "react";
import Timer from "./Timer";

const tabListNoTitle = [
    {
        key: "timer",
        tab: "타이머",
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

class TabsCard extends React.Component {
    state = {
        noTitleKey: "timer",
        contentListNoTitle: {
            timer: <Timer mySocket={this.props.mySocket} owner={this.props.owner}/>,
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
                </Card>
            </>
        );
    }
}
export default TabsCard;
