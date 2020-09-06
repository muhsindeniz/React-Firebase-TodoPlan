import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import firebase from '../../Services/firebase';
import moment from 'moment';

let Home = (props) => {
    const [list, setList] = useState([]);

    const onDelete = (id) => {
        const plan = firebase.firestore();
        plan.collection('users').doc(id).delete();
    }

    useEffect(() => {
        const plan = firebase
            .firestore()
            .collection('users')
            .onSnapshot((snapshot) => {
                const newPlan = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setList(newPlan)
            })
        return () => plan()
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row p-4">
                        <div className="col-sm-12 p-2 border-bottom"><h3>Planlarım</h3></div>
                        <div className="col-sm-12 pt-4">

                            {
                                list.map((lis) => {
                                    return (
                                        <div className="row mt-3" key={lis.id}>
                                            <div className="col-sm-1">
                                                <div className="content__color"></div>
                                            </div>
                                            <div className="col-sm-9">{lis.plan}</div>
                                            <div className="col-sm-2">
                                                <div className="row">
                                                    <div className="col-sm-3 content__date">Tarih: </div>
                                                    <div className="col-sm-9 content__date">{moment(lis.date).format("MM dd YY : HH:mm")}</div>
                                                </div>
                                                <div className="col-sm-12 mt-1">
                                                    <Button block type="danger" shape="round" size="large" onClick={() => {onDelete(lis.id)}}>
                                                        Planı Sil
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }





                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;