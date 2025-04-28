import moment from "moment";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";

const DateInput = ({ value, onChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    hideDatePicker();
    onChange(date);
  };

  return (
    <>
      <TouchableOpacity onPress={showDatePicker} style={styles.outlined}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../../assets/images/calendar.png")}
        />
        <Text style={styles.text}>
          {value ? moment(value).format("LL") : "Select a date"}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={value || new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default React.memo(DateInput);
