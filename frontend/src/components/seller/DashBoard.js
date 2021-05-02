import React, {useEffect} from 'react';
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


const tileData = [
    {
        img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
        title: 'Golden watch',
        author: '$10.00',
    },
    {
        img: "https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1484&q=80",
        title: 'Luminus Watch',
        author: '$22.34',
    },
    {
        img: "https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80",
        title: 'Rose Gold Watch',
        author: '$12.00',
    },
    {
        img: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        title: 'White Watch',
        author: '$14.50',
    },
    {
        img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
        title: 'Golden watch',
        author: '$10.00',
    },
    {
        img: "https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1484&q=80",
        title: 'Luminus Watch',
        author: '$22.34',
    }


]

export default function Dashboard() {

    const classes = useStyles();

    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
    })

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
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>price: {tile.author}</span>}
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
                    <Avatar src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1412&q=80" style={{width:'150px',height:'150px'}} />
                </div>
                <div className="SellerName">
                    <h5 style={{color:'whitesmoke'}}>John doe</h5>
                </div>

                <div className="itemCount">
                    <br/>
                    <h5 style={{color:'whitesmoke'}}>Total Items</h5>
                </div>
                <div className="sellCount">
                    <br/>
                    <h5 style={{color:'whitesmoke'}}>Items Sold</h5>
                </div>

                <div className="addItem">
                    <Button variant="contained" color="secondary" type="submit" endIcon={<StorefrontIcon>StorefrontIcon</StorefrontIcon>}>
                        Add Item
                    </Button>
                </div>

            </div>
        </div>
    );
}


