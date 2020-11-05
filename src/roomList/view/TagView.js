import React, { useCallback } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../scss/RoomList.scss";

export default function CheckboxLabels(props) {
    const { tagList, checkedTagList } = props;
    console.log(tagList);
    return (
        <div className="tagList">
            {tagList?.map((tag) => {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={tag.checked}
                                onChange={(event) =>
                                    checkedTagList(event, tag.id)
                                }
                                name={tag.title}
                            />
                        }
                        label={tag.title}
                    />
                );
            })}
        </div>
    );
}
