import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import React from "react";

const EmojiPicker = ({ onChange }) => {
  return (
    <div className=" bottom-0 ">
      <Picker
        title="Pick your emoji ..."
        className="text-xs"
        emoji="point-up"
        onClick={(emoji) => onChange(emoji)}
        emojiSize={30}
      />
    </div>
  );
};

export default EmojiPicker;
