import React, { Component } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import classnames from 'classnames'

const styles = {
  container: {
    position: 'absolute' as 'absolute',
    top: "15vh",
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center' as 'center',
  },
  arrow: {
      color:"#324e7b",
      "&:hover":{
          color:"#f8f8f8",
          fontSize:"3vh"
      }
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
}

interface Props extends WithStylesProps<typeof styles> {
  onClick?: () => void
  direction: 'left' | 'right'
}

class _CarouselArrow extends Component<Props> {

  handleClick = () => {
    const { onClick } = this.props

    if (onClick) {
      onClick()
    }
  }

  render() {
    const { direction, classes } = this.props

    return (
      <div
        className={classnames(classes.container, {
          [classes.left]: direction === 'left',
          [classes.right]: direction === 'right',
        })}
        onClick={this.handleClick}
      >
        <div className={classes.arrow}>
          {direction === 'left' ? <div className="fa fa-arrow-circle-left fa-4x" /> : <div className="fa fa-arrow-circle-right fa-4x" />}
        </div>
      </div>
    )
  }
}

export const CarouselArrow = withStyles(styles)(_CarouselArrow)
