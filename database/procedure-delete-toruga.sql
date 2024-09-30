DELIMITER $$

CREATE PROCEDURE deleteToruga(idToruga INT)
BEGIN
    UPDATE toruga
    SET isDeleted = 1
    WHERE toruga.id = idToruga;
END $$

DELIMITER ;

use toruga;
drop procedure deleteToruga;
call deleteToruga(2);
select * from toruga;
