import React from 'react';

class Skill extends React.Component {
  constructor(props) {
    super(props);

    this.progressRef = React.createRef();
  }

  render() {
    let { name, img, width, long } = this.props;

    return (
      <div className={`skill-bar ${name.toLowerCase()}`}>
        <h5>{name}</h5>
        <div className='bar'>
          <div className='progress' style={{ width: width ? width + '%' : 0 }}>
            {width !== undefined ? (
              <div className='logo'>
                <img
                  alt={name}
                  src={img}
                  width={width}
                  className={long ? ' long' : ''}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
