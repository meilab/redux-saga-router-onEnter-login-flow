export const styles = {
  galleryContainer :{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
      justifyContent: 'space-between'
  },

  galleryImage :{
      flex: '1 1 80%',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '100%',
      justifyContent: 'center',
  },

  scrollerContainer :{
      width: '100%',
      height: 100,
      flex: '1 16%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
  },
  scrollerImage : {
    flex: '1 1 0',
    justifyContent: 'space-around'
  },
  image: {
    maxWidth: '100%'
  }
}

export default styles