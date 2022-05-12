import React, { Component } from 'react'
import { render, screen } from '@testing-library/react';


import Ui from "../Ui-container/Index"



it("renders without crashing", () => {
    render(<Ui name='' email='' profileImg='' />);
    const input = screen.getByLabelText('')
  });

//   it("renders without crashing", () => {
//     expect(Ui({name:'' , email:'', profileImg:''})).toBe()
//   });
