import React, { Component, useState, useEffect } from 'react';
import { Button, Input, Form } from 'antd';
import 'antd/dist/antd.css';
import firebase from '../../Services/firebase';
import moment from 'moment';

let AddWork = (props) => {

    const validateMessages = {
        required: 'Lütfen Alanı Boş Bırakmayınız!'
    }

    const [plan, setPlan] = useState([]);

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("users").add({
            plan: plan,
            tarih: moment().format("MM dd YY : HH:mm")
        });
    }

    useEffect(() => {
        const db = firebase
            .firestore()
            .collection('users')
            .onSnapshot((snapshot) => {
                const newPlan = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
         
    }, [])

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-12">
                    <div className="row p-4">
                        <div className="col-sm-12 p-2 border-bottom"><h2 style={{color:"#E01400"}}>Yeni Bir Plan Oluştur</h2></div>

                        <div className="col-sm-12 mt-4">
                                <Form validateMessages={validateMessages}>
                                    <label><span className="plan__label">Yapmak istediğin Planı yaz</span></label>
                                    <Form.Item name={['user', 'introduction']}  rules={[{ required: true }]}>
                                        <Input.TextArea required onChange={(e) => {setPlan(e.target.value)}} />
                                    </Form.Item>

                                    <Button type="primary" className="mt-3" block htmlType="submit" onClick={() => { onCreate() }}>
                                        Planı Ekle
                                    </Button>
                                </Form>
                            </div>

                    </div>
                </div>
            </div>
        </div >
    )

}

export default AddWork;