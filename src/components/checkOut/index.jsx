import { toast } from "react-hot-toast";

import './checkOut.css'

import {useState} from 'react'

import {getFirestore, addDoc, collection} from 'firebase/firestore';

import { useCartContext } from "../../context/CartContext";

import { Link } from 'react-router-dom';


    const CheckOut = () => {
        const [id , setId] = useState()
        const [form, setForm] = useState({

        name: '',
        email: '',
        email2: '',
        message: '',
        });
        const { cart,totalPrice,clearCart } = useCartContext();

        const compra = {
          form,
          items: cart.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
            })),
          total: totalPrice(),
      }

   

      const finishClick = (e) => {
        e.preventDefault()
          if(form.name === '' && form.email === '') {
              toast.error("Todos los campos son requeridos")
            }else if (form.email !== form.email2) {
              toast.error("Los emails no coinciden")
            }else{
              const db = getFirestore();
              const ordersCollection = collection(db, 'orders')
                addDoc(ordersCollection, compra)
                .then(( res ) => {
                  toast.success(`Su Compra ${res.id} se realizó Correctamente`, {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                  setId(res.id)
                clearCart();
                 })   
              
            }
      }

        // Hago copia del form
        const changeHandler = (ev) => {
            const {value, name} = ev.target;
            setForm({...form, [name]:value})
        }
        
        return (
            <div className="div-full">
            {typeof id !== 'undefined' ? (
              <div className="message-dad">
              <p className="message">Su mensaje se ha enviado correctamente!, su id de orden es: {id}</p>
              <Link to='/'><button className="button-message">Volver a Comprar</button></Link>
            </div>
            ) : (
              
              <form onSubmit={finishClick} className='form'>
                <div>
                    <h2 className="title-compra">Formulario de Compra</h2>
                  <label htmlFor="name" className="label-1">Nombre: </label>
                  <input
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={changeHandler}
                    className='input-duo'
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-1" >Email: </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={changeHandler}
                    className='input-duo input-duo-2'
                  />
                </div>
                <div>
                  <label htmlFor="email2" className="label-1" >Verificar Email: </label>
                  <input
                    type="email"
                    name="email2"
                    id="email2"
                    value={form.email2}
                    onChange={changeHandler}
                    className='input-duo input-duo-2'
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label-1">Mensaje: </label>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={changeHandler}
                    className='input-duo'
                  ></textarea>
                </div>
                <button className="submit-button">Enviar</button>
              </form>
            )}
          </div>
        )
}


export default CheckOut;
