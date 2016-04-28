use idpdb;
db.createCollection( "eventHandlingStart");
db.createCollection( "eventStorageDepletionStart");
db.createCollection( "eventBaggageArrival");
db.createCollection( "eventWorkerStartToHandle");
db.createCollection( "eventHandlingEnd");
db.createCollection( "carousel");
db.createCollection( "worker");
db.createCollection( "flight");
db.carousel.insert(
{
	_id : 1,
	xCoordinate: 1,
	yCoordinate: 1,	
	parkingPositions:  1,
	maxCapacity: 1,
	currentCapacity: 1,
	flight_id: [1, 2],
	workingStationsAssigned:  [1, 2]
});
db.flight.insert(
{
	_id: 2,
	requiredNumberOfParkingStations: 10,
	expectedEndOfBaggageHandling: 22,
	carousel_id: 1,
	worker_id: [1, 2],
	workstations: [1,2]
}
);
db.worker.insert(
{
	_id: 1,
	shiftStartTime: 1,
	shiftStartXCoordinate: 1,
	shiftStartYCoordinate: 1,
	shiftEndTime: 1,
	shiftEndXCoordinate: 1,
	shiftEndYCoordinate: 1,
	groundHandler_id: 1
},
{
	_id: 2,
	shiftStartTime: 1,
	shiftStartXCoordinate: 1,
	shiftStartYCoordinate: 1,
	shiftEndTime: 1,
	shiftEndXCoordinate: 1,
	shiftEndYCoordinate: 1,
	groundHandler_id: 1
}
);
db.groundHandler.insert(
{
	_id:1,
	_name:"AeroHandler"
});
db.eventHandlingStart.insert(
{
	_time: 1,
	carousel_id: 1,
	flight_id: 1,
	workingstations: [1,2]
});

db.eventStorageDepletionStart.insert(
{
	_time:1,
	flight_id: 1
});

db.eventBaggageArrival.insert(
{
	_time: 1,
	flight_id: 1,
	bags: 10
});

db.eventWorkerStartToHandle.insert(
{
	_time: 1,
	flight_id: 1, 
	worker_id: 1
});