DELIMITER $$

CREATE PROCEDURE updateAnalysis(idToruga INT, ph FLOAT, chlorine FLOAT, turbidity FLOAT, waterVolume FLOAT, iqa FLOAT)
BEGIN
    UPDATE toruga
    SET 
        ph = ph,
        chlorine = chlorine,
        turbidity = turbidity,
        waterVolume = waterVolume,
        iqa = iqa,
        lastAnalysis = NOW()
    WHERE toruga.id = idToruga;
END $$

DELIMITER ;

use toruga;
drop procedure updateAnalysis;
call updateAnalysis(1, 7, 2, .8, 30, 100);
select * from toruga;
