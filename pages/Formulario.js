import { SecurityScanOutlined } from '@ant-design/icons/lib/icons';
import { Form, Input, Button, message, Alert } from 'antd';
import {useEffect,useState} from 'react'
function Formulario() {
  let multiplicacion = 1
  const [error,setError] = useState(null);
  const [resultado,setResultado]=useState(false)
  const [dolares,setDolares]=useState(false)
  const access_key='138ca01354c449d7741ab9dbca4f4252'  
  
  
  // useEffect(()=>{    
  //     setError(false)    
  // },[error])

  const onSubmit = async (values)=> {    
    let send = true
    let cantidad = values.cantidad
    // console.log(JSON.stringify(values,null,4))
    Object.entries(values).map((val)=>{
      let valor = Number(val[1])
      if(typeof valor !== 'number' ||
        Number.isNaN(valor)
      )  {
          setError('ingresa sólo números');
          message.warning('usa solo numeros')
          setResultado(null)
          setDolares(null)
          send = false

         }
        }
      )
      if(send){

        try{
          message.success(`enviado ${cantidad}`)  
          let currency = await fetch(`http://api.currencylayer.com/live?access_key=${access_key}`)
    
          currency = await currency.json();

          multiplicacion = currency.quotes.USDMXN*cantidad
          setResultado(multiplicacion)  
          setDolares(cantidad)       
          setError(null)
        }catch(e){
          console.log(e)
          message.error(e)
        }
      }    
  };


  const onFinishFailed = (errorInfo) => {
    console.log('ERROR: ', errorInfo);
  };
 
  return (
      <>

        {error && <Alert message={error} type='error'/>}
        {dolares&&resultado && <Alert message={`${dolares} es ${resultado} dolares `} type='success'/>}        
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
        onFinish={onSubmit}
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
            // offset: 8,
            // span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
          <SecurityScanOutlined />
            Submit
          </Button>
        </Form.Item>
        </Form>

      </>
    )
  }

  export default Formulario;