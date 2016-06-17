#!/bin/sh

echo exit | sqlplus -S / as sysdba @/tmp/createSetup.sql