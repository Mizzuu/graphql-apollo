import { useState } from "react";
import { Card } from "antd";

import { EditOutlined } from "@ant-design/icons";

const getStyles = () => ({
    card: {
        width: "500px",
    },
});

const Person = (props) => {
    const styles = getStyles();
    const { id, firstName, lastName } = props;

    return (
        <div>
            {/* {editMode ? (
         <UpdateContact
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : ( */}
            <Card style={styles.card}>
                {firstName} {lastName}
            </Card>
        </div>
    );
};

export default Person;
