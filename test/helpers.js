import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.configureMockStore = configureMockStore;
global.thunk = thunk;
global.nock = nock;
