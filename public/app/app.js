var app = angular.module("homeAutomateApp", ['ngRoute', 'ngResource']);

//load socket to expose io() globally
var socket = io();
