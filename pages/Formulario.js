import { Form, Input, Button, message } from 'antd';
import {useState} from 'react'
function Formulario() {
  const [error,setError] = useState(null);
  const onFinish = (values) => {
    Object.entries(values).map((val)=>{
      // console.log(val)
      let valor = Number(val[1])
      if(typeof valor !== 'number' ||
        Number.isNaN(valor)
      ){
        setError('usa nùmeros');
        message.warning('usa numeros')
      }
      })



    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    const registerUser = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }

  
    return (
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


      <Form.Item
        label="cantidad"
        name="cantidad"
        rules={[
          {
            required: true,
            message: 'ingresa cantidad',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
  }

  export default Formulario;