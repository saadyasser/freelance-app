import { useState } from 'react';
import styled from 'styled-components';

const SelectElement = styled.div`
  &,
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
  }
  .select-wrapper {
    position: relative;
    user-select: none;
    width: 100%;
  }
  .select {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    font-size: 18px;
    line-height: 24px;
    color: #707070;
    padding: 18px 0 18px 16px;
    background: #ffffff;
    cursor: pointer;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: #bec2c6;
    border-radius: 7px;
  }
  .custom-options {
    position: absolute;
    display: block;
    width: 100%;
    top: 100%;
    left: 0;
    right: 24px;
    border: 1px solid #bec2c6;
    border-top: 0;
    background: #fff;
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
  }
  .select.open .custom-options {
    height: 200px;
    overflow-y: scroll;
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  .custom-option {
    position: relative;
    display: block;
    padding: 0 22px 0 22px;
    font-size: 18px;
    color: #3b3b3b;
    line-height: 60px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .custom-option:hover {
    cursor: pointer;
    background-color: #fff;
  }
  .custom-option.selected {
    color: #707070;
  }
  .arrow {
    position: relative;
    height: 15px;
    width: 15px;
  }
  .arrow::before,
  .arrow::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  .arrow::before {
    left: -29px;
    transform: rotate(45deg);
    background-color: #bec2c6;
  }
  .arrow::after {
    left: -19px;
    transform: rotate(-45deg);
    background-color: #bec2c6;
  }
  .open .arrow::before {
    left: -29px;
    transform: rotate(-45deg);
  }
  .open .arrow::after {
    left: -19px;
    transform: rotate(45deg);
  }
`;

const SelectInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SelectElement>
      <div
        className="select-wrapper"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={`select ${isOpen ? 'open' : ''}`}>
          <div className="select__trigger">
            <span>Tesla</span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            <span className="custom-option selected" data-value="tesla">
              Tesla
            </span>
            <span className="custom-option" data-value="volvo">
              Volvo
            </span>
            <span className="custom-option" data-value="mercedes">
              Mercedes
            </span>
            <span className="custom-option selected" data-value="tesla">
              Tesla
            </span>
            <span className="custom-option" data-value="volvo">
              Volvo
            </span>
            <span className="custom-option" data-value="mercedes">
              Mercedes
            </span>{' '}
            <span className="custom-option selected" data-value="tesla">
              Tesla
            </span>
            <span className="custom-option" data-value="volvo">
              Volvo
            </span>
            <span className="custom-option" data-value="mercedes">
              Mercedes
            </span>{' '}
            <span className="custom-option selected" data-value="tesla">
              Tesla
            </span>
            <span className="custom-option" data-value="volvo">
              Volvo
            </span>
            <span className="custom-option" data-value="mercedes">
              Mercedes
            </span>{' '}
            <span className="custom-option selected" data-value="tesla">
              Tesla
            </span>
            <span className="custom-option" data-value="volvo">
              Volvo
            </span>
            <span className="custom-option" data-value="mercedes">
              Mercedes
            </span>{' '}
            <span className="custom-option selected" data-value="tesla">
              Tesla
            </span>
            <span className="custom-option" data-value="volvo">
              Volvo
            </span>
            <span className="custom-option" data-value="mercedes">
              Mercedes
            </span>
          </div>
        </div>
      </div>
    </SelectElement>
  );
};
export default SelectInput;
