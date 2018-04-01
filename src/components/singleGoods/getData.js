import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function (state, action) {
  if (!state) {
    state = { data:'' }
  }
  switch (action.type) {
    case 'get':
    	return {data:action.data};
    default:
      return state
  }
}

// action creators
export const getdata=(data)=>{
	return {type:'get',data}
}