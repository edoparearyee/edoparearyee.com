import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import type { Meta, StoryObj } from '@storybook/react';

import gridConfig from './gridConfig';
import GridContainer from './GridContainer';

setConfiguration(gridConfig);

const meta: Meta<typeof GridContainer> = {
  title: 'GridContainer',
  component: GridContainer,
};

export default meta;

const boxStyle = {
  background: '#F1F2F5',
  border: '1px solid #101823',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  alignItems: 'center',
};

type Story = StoryObj<typeof GridContainer>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OneByOne: Story = {
  args: {
    ...defaultArgs,
    children: (
      <Container fluid>
        <Row>
          <Col>
            <div style={boxStyle}>1</div>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const TwoByOne: Story = {
  args: {
    ...defaultArgs,
    children: (
      <Container fluid>
        <Row>
          <Col md={6}>
            <div style={boxStyle}>1</div>
          </Col>
          <Col md={6}>
            <div style={boxStyle}>2</div>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const ThreeByOne: Story = {
  args: {
    ...defaultArgs,
    children: (
      <Container fluid>
        <Row>
          <Col md={4}>
            <div style={boxStyle}>1</div>
          </Col>
          <Col md={4}>
            <div style={boxStyle}>2</div>
          </Col>
          <Col md={4}>
            <div style={boxStyle}>3</div>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const FourByOne: Story = {
  args: {
    ...defaultArgs,
    children: (
      <Container fluid>
        <Row>
          <Col md={3}>
            <div style={boxStyle}>1</div>
          </Col>
          <Col md={3}>
            <div style={boxStyle}>2</div>
          </Col>
          <Col md={3}>
            <div style={boxStyle}>3</div>
          </Col>
          <Col md={3}>
            <div style={boxStyle}>4</div>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const PerBreakpoint: Story = {
  args: {
    ...defaultArgs,
    children: (
      <Container fluid>
        <Row>
          <Col md={6} lg={4} xl={3}>
            <div style={boxStyle}>1</div>
          </Col>
          <Col md={6} lg={4} xl={3}>
            <div style={boxStyle}>2</div>
          </Col>
          <Col md={6} lg={4} xl={3}>
            <div style={boxStyle}>3</div>
          </Col>
          <Col md={6} lg={4} xl={3}>
            <div style={boxStyle}>4</div>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const PerBreakpointMix: Story = {
  args: {
    ...defaultArgs,
    children: (
      <Container fluid>
        <Row>
          <Col md={6} lg={4} xl={12}>
            <div style={boxStyle}>1</div>
          </Col>
          <Col md={6} lg={4} xl={3}>
            <div style={boxStyle}>2</div>
          </Col>
          <Col md={12} lg={4} xl={6}>
            <div style={boxStyle}>3</div>
          </Col>
          <Col md={12} lg={12} xl={3}>
            <div style={boxStyle}>4</div>
          </Col>
        </Row>
      </Container>
    ),
  },
};
