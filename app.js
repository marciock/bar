const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const waiterRouter = require('./routes/waiter/index');
const waiterLoginRouter = require('./routes/waiter/login');
const tablesRouter = require('./routes/tables/index');
//const searchRouter = require('./routes/waiter/search');
const registerIndexRouter = require('./routes/register/index');
// Tables
const registerTablesRouter = require('./routes/register/tables');
const newTablesRouter = require('./routes/register/tables_new');
const updateTablesRouter = require('./routes/register/tables_update');
const getTablesRouter = require('./routes/register/tables_get');

//waiters
const registerWaiterssRouter = require('./routes/register/waiters');
const newWaitersRouter = require('./routes/register/waiters_new');
const updateWaitersRouter = require('./routes/register/waiters_update');
const getWaitersRouter = require('./routes/register/waiters_get');
//searchies
const searchNotesRouter = require('./routes/waiter/search_notes');
const searchTablesRouter = require('./routes/waiter/search_tables');
const searchMenusRouter = require('./routes/waiter/search_menus');

//menus
const registerMenussRouter = require('./routes/register/menus');
const newMenusRouter = require('./routes/register/menus_new');
const updateMenusRouter = require('./routes/register/menus_update');
const getMenusRouter = require('./routes/register/menus_get');

//notes
const registerNotessRouter = require('./routes/register/notes');
const newNotesRouter = require('./routes/register/notes_new');
const updateNotesRouter = require('./routes/register/notes_update');
const getNotesRouter = require('./routes/register/notes_get');

//cashiers
const saveCashiersRouter=require('./routes/cashiers/cashiers_save');
const listCashiersRouter=require('./routes/cashiers/cashiers_list');


const expressLayouts = require('express-ejs-layouts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);



app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/waiter', waiterRouter);
app.use('/login', waiterLoginRouter);
app.use('/tables', tablesRouter);
//app.use('/search', searchRouter);
app.use('/register', registerIndexRouter);

// crud tables
app.use('/register_tables', registerTablesRouter);
app.use('/new_tables', newTablesRouter);
app.use('/update_tables', updateTablesRouter);
app.use('/get_tables', getTablesRouter);

//crud waiters
app.use('/register_waiters', registerWaiterssRouter);
app.use('/new_waiters', newWaitersRouter);
app.use('/update_waiters', updateWaitersRouter);
app.use('/get_waiters', getWaitersRouter);

//crud menus
app.use('/register_menus', registerMenussRouter);
app.use('/new_menus', newMenusRouter);
app.use('/update_menus', updateMenusRouter);
app.use('/get_menus', getMenusRouter);

//crud notes
app.use('/register_notes', registerNotessRouter);
app.use('/new_notes', newNotesRouter);
app.use('/update_notes', updateNotesRouter);
app.use('/get_notes', getNotesRouter);

//searchies routes
app.use('/search_notes', searchNotesRouter );
app.use('/search_tables', searchTablesRouter );
app.use('/search_menus', searchMenusRouter );

//crud cashiers
app.use('/save_cashiers',saveCashiersRouter);
app.use('/list_cashiers',listCashiersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
