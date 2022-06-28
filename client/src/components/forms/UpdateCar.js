import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";

import { UPDATE_CAR } from "../../queries";

const UpdateCar = (props) => {
    const [id] = useState(props.id);
    const [year, setYear] = useState(props.year);
    const [make, setMake] = useState(props.make);
    const [model, setModel] = useState(props.model);
    const [price, setPrice] = useState(props.price);
    const [personId, setPersonId] = useState(props.personId);
    const [updateCar] = useMutation(UPDATE_CAR);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        const { year, make, model, price, personId } = values;

        updateCar({
            variables: {
                id,
                year,
                make,
                model,
                price,
                personId,
            },
        });

        props.onButtonClick();
    };

    const updateStateVariable = (variable, value) => {
        props.updateStateVariable(variable, value);
        switch (variable) {
            case "year":
                setYear(value);
                break;
            case "make":
                setMake(value);
                break;
            case "model":
                setModel(value);
                break;
            case "price":
                setPrice(value);
                break;
            case "personId":
                setPersonId(value);
                break;
            default:
                break;
        }
    };

    return (
        <Form
            form={form}
            name="update-car-form"
            layout="inline"
            onFinish={onFinish}
            initialValues={{
                year: year,
                make: make,
                model: model,
                price: price,
                personId: personId,
            }}
        >
            <Form.Item
                name="year"
                rules={[
                    {
                        required: true,
                        type: "integer",
                        message: "Please input the year of your car created!",
                    },
                ]}
            >
                <Input
                    placeholder="2012"
                    onChange={(e) =>
                        updateStateVariable("year", e.target.value)
                    }
                />
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
                <Input
                    placeholder="Honda"
                    onChange={(e) =>
                        updateStateVariable("make", e.target.value)
                    }
                />
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
                <Input
                    placeholder="Fit"
                    onChange={(e) =>
                        updateStateVariable("model", e.target.value)
                    }
                />
            </Form.Item>
            <Form.Item
                name="price"
                rules={[
                    {
                        required: true,
                        type: "float",
                        message: "Please input the price of your car!",
                    },
                ]}
            >
                <Input
                    placeholder="17000"
                    onChange={(e) =>
                        updateStateVariable("price", e.target.value)
                    }
                />
            </Form.Item>
            <Form.Item
                name="personId"
                rules={[
                    {
                        required: true,
                        message: "Please input the person of your car!",
                    },
                ]}
            >
                <Input
                    placeholder="2012"
                    onChange={(e) =>
                        updateStateVariable("personId", e.target.value)
                    }
                />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            (!form.isFieldTouched("year") &&
                                !form.isFieldTouched("make") &&
                                !form.isFieldTouched("model") &&
                                !form.isFieldTouched("price") &&
                                !form.isFieldTouched("personId")) ||
                            form
                                .getFieldsError()
                                .filter(({ errors }) => errors.length).length
                        }
                    >
                        Update Car
                    </Button>
                )}
            </Form.Item>
            <Button onClick={props.onButtonClick}>Cancel</Button>
        </Form>
    );
};

export default UpdateCar;
