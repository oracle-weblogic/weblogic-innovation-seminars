exec DBMS_SERVICE.CREATE_SERVICE('AC','AC'); 
exec DBMS_SERVICE.START_SERVICE('AC');
DECLARE
  params dbms_service.svc_parameter_array;
BEGIN
  params('COMMIT_OUTCOME'):='true';
  params('RETENTION_TIMEOUT'):=604800;
  params('FAILOVER_TYPE'):='TRANSACTION';
  params('SESSION_STATE_CONSISTENCY'):='DYNAMIC';
  dbms_service.modify_service('AC',params);
END;
/
