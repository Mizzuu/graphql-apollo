import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import { Form, Input, Button } from "antd";

import { v4 as uuidv4 } from "uuid";

import { ADD_CAR, GET_CARS } from "../../queries";

const AddCar = () => {
    const [id] = useState(uuidv4());
    const [addCar] = useMutation(ADD_CAR);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        const { year, make, model, price, personId } = values;

        addCar({
            variables: {
                id,
                year,
                make,
                model,
                price,
                personId,
            },
            update: (proxy, { data: { addCar } }) => {
                const data = proxy.readQuery({ query: GET_CARS });
                proxy.writeQuery({
                    query: GET_CARS,
                    data: {
                        ...data,
                        cars: [...data.cars, addCar],
                    },
                });
            },
        });
    };

    return (
        <Form
            form={form}
            name="add-car-form"
            layout="inline"
            onFinish={onFinish}
            size="large"
            style={{ marginBottom: "40px" }}
        >
            <Form.Item
                name="year"
                rules={[
                    {
                        required: true,
                        type: "Integer",
                        message: "Please input the year of your car created!",
                    },
                ]}
            >
                <Input placeholder="1993" />
            </Form.Item>

            <Form.Item
                name="make"
                rules={[
                    {
                        required: true,
                        message: "Please input who made your car!",
                    },
                ]}
            >
                <Input placeholder="Mazda" />
            </Form.Item>

            <Form.Item
                name="model"
                rules={[
                    {
                        required: true,
                        message: "Please input the model of your car!",
                    },
                ]}
            >
                <Input placeholder="CX5" />
            </Form.Item>

            <Form.Item
                name="price"
                rules={[
                    {
                        required: true,
                        type: "Float",
                        message: "Please input the price of your car!",
                    },
                ]}
            >
                <Input placeholder="16000" />
            </Form.Item>

            <Form.Item
                name="personId"
                rules={[
                    {
                        required: true,
                        message: "Please select the owner",
                    },
                ]}
            >
                <Input placeholder="Mak" />
            </Form.Item>

            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            form
                                .getFieldsError()
                                .filter(({ errors }) => errors.length).length
                        }
                    >
                        Add Car
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default AddCar;
