import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import '../../assets/uditha.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import Button from "@material-ui/core/Button";
import {Avatar} from "@material-ui/core";
import SellerNavBar from "./SellerNavBar";
import AddItem from "./AddItem";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
//import SellerNavBar from "./SellerNavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    gridList: {
        width: 500,
        height: 580,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Dashboard(props) {

    let username = (localStorage.getItem('seller-name'));
    let userid = (localStorage.getItem('seller-id'));
    let avatar = (localStorage.getItem('avatar'));
    const  history = useHistory();

    const classes = useStyles();
    const [tileData,setTileData] = useState([]);

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"

        if(username === null){
            history.push("/login")
        }

        //setAvatar(this.props.selectedValue);

        axios.get("http://localhost:9000/item/"+userid).then((res) => {
            console.log(res.data);
            console.log(props);
            setTileData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[]);


    return (
        <div>
            <SellerNavBar/>
            <div className={classes.root}>

                <div className="myItems">
                    <h3 style={{color:'whitesmoke'}}>My Items</h3>
                    <GridList  spacing={10} cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>

                        </GridListTile>

                        {tileData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <Link to ={`update-item/${tile._id}`}>
                                <img src={"http://localhost:9000/"+tile.itemImage} width="240px" height="220px" alt={tile.title}/>
                                </Link>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>price: {tile.price}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>


                <div className="Avatar">
                    <Avatar src={"http://localhost:9000/"+avatar} style={{width:'150px',height:'150px'}} />
                </div>
                <div className="SellerName">
                    <h5 style={{color:"whitesmoke","font-size":"30px"}}>{username} </h5>
                    <h5 style={{color:"aqua","font-size":"10px"}}>Seller ID: {userid} </h5>
                </div>

                <div className="itemCount">
                    <br/>
                    <h5 style={{color:'whitesmoke'}}>Total Items</h5>
                    <h3 style={{color:"yellow", "font-size":"30px"}}>120</h3>
                </div>
                <div className="sellCount">
                    <br/>
                    <h5 style={{color:'whitesmoke'}}>Items Sold</h5>
                    <h3 style={{color:"green","font-size":"30px"}}>20</h3>
                </div>

                <div className="addItem">
                    <Button variant="contained" color="secondary" type="submit" href="/add-item" endIcon={<StorefrontIcon>StorefrontIcon</StorefrontIcon>}>
                        Add Item
                    </Button>
                </div>

            </div>
        </div>
    );
}


