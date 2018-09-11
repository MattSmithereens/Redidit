import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import poop from './images/poop.svg'


const styles = theme => ({
  root: {
    marginTop: '5%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


 const tileData = [
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   },
   {
     img: "image",
     title: 'Image',
     author: 'author',
   }
 ];

 function AdvancedGridList(props) {
   const { classes } = props;

   return (
     <div className={classes.root}>
       <GridList cellHeight={200} spacing={1} className={classes.gridList}>
         {tileData.map(tile => (
           <Card />
           // <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
           //   <img src={tile.img} alt={tile.title} />
           //   <GridListTileBar
           //     title={tile.title}
           //     titlePosition="top"
           //     actionIcon={
           //       <IconButton className={classes.icon}>
           //         <StarBorderIcon />
           //         <img src={poop} alt="poop" />
           //       </IconButton>
           //     }
           //     actionPosition="left"
           //     className={classes.titleBar}
           //   />
           // </GridListTile>
         ))}
       </GridList>
     </div>
   );
 }

 AdvancedGridList.propTypes = {
   classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(AdvancedGridList);
