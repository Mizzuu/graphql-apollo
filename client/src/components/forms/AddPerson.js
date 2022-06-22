import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Input, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ADD_PERSON, GET_PEOPLE } from "../../queries";

const AddPerson = () => {
    const [id] = useState(uuidv4(ADD_PERSON));
    return (
        <Form
            // form={form}
            name="add-contact-form"
            layout="inline"
            // onFinish={onFinish}
            size="large"
            style={{ marginBottom: "40px" }}
        >
            <Form.Item
                name="firstName"
                rules={[
                    {
                        required: true,
                        message: "Please input your first name!",
                    },
                ]}
            >
                <Input placeholder="i.e. John" />
            </Form.Item>

            <Form.Item
                name="lastName"
                rules={[
                    { required: true, message: "Please input your last name!" },
                ]}
            >
                <Input placeholder="i.e. Smith" />
            </Form.Item>

            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button type="primary" htmlType="submit">
                        Add Person
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default AddPerson;
