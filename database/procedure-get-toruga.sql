DELIMITER $$

CREATE PROCEDURE getToruga(idToruga int)
BEGIN
    select id, nickname, waterVolume, ph, turbidity, chlorine, iqa, lastAnalysis from toruga where toruga.id = idToruga;
END $$

DELIMITER ;

use toruga;
drop procedure getToruga;
call getToruga(2);
select * from toruga;
