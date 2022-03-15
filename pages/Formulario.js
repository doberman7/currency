import { SecurityScanOutlined } from '@ant-design/icons/lib/icons';
import { Form, Input, Button, message, Alert } from 'antd';
import {useEffect,useState} from 'react'
function Formulario() {
  let multiplicacion = 1
  const [error,setError] = useState(null);
  const [resultado,setResultado]=useState(false)
  const [dolares,setDolares]=useState(false)
  const access_key= process.env.ACCESS_KEY 
  
  
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
          console.log(currency)
          currency = await currency.json();

          multiplicacion = currency.quotes.USDMXN*cantidad
          multiplicacion=Math.round((multiplicacion+Number.EPSILON)  *100)/100
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

        
        <p>{error && <Alert message={error} type='error'/>}</p>
        <p >{dolares&&resultado && <Alert message={`${dolares}$USD equivale a ${resultado}$MXN `} type='success'/>}        </p>
        
        <Form
        name="basic"
        labelCol={{
          // span: 8,
        }}
        wrapperCol={{
          // span: 16,
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