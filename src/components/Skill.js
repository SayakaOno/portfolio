import React from 'react';

class Skill extends React.Component {
  constructor(props) {
    super(props);

    this.progressRef = React.createRef();
  }

  render() {
    let { name, img, width } = this.props;

    return (
      <div className='skill-bar'>
        <h5>{name}</h5>
        <div className='bar'>
          <div
            className='progress'
            style={{ width: width ? width + '%' : 0 }}
          />
          {width !== undefined ? (
            <div
              className='logo'
              style={{
                left: `calc(${width}% - 15px)`
              }}
            >
              <img alt={name} src={img} width={width} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Skill;
