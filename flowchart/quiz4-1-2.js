function minced_pork_omelet(){
    var egg = "เตรียมไข่ไก่";
    var garnish = "เตรียมเครื่องปรุง";
    var crack_egg = "ตอกไข่ใส่ชาม";
    var pork = "นำหมูสับสำเร็จรูปมาใส่ในชามไข่";
    var beat_eggs = "ตีไข่กับหมูสับและเครื่องปรุงให้เข้ากัน";
    while(ตรวจสอบไข่ที่ตีในชาม_เข้ากันหรือยัง){
        if(ตีไข่เข้ากันแล้ว){
            var pan = "ตั้งกะทะบนเตาแก๊ส";
            var gas = "ตั้งความแรงของไฟบนเตาแก๊สระดับปานกลาง";
            while(ตรวจสอบน้ำมันร้อนได้ทีหรือยัง){
                if(น้ำมันร้อนแล้วหรือยัง){
                    var beat_eggs = "นำไข่ที่ตีราดลงในกะทะที่ตั้งไว้";
                    while(ทอดไข่เจียวให้สุก){
                        if(ไข่เจียวสุกหรือยัง){
                            var dish = beat_eggs + "ไข่ใส่จาน";
                            print("ไข่เขียวทอดหมูสับใ่ส่จาน");
                            end();
                        }else{
                            var beat_eggs = "ทอดไข่ให้สุก";
                            continue;
                        }
                    }
                }else{
                    var wait_hot_oil = "รอน้ำมันร้อนได้ที่";
                    continue;
                }
            }
        }else{
            var beat_eggs_again = "ตีไข่ให้เข้ากันอีกที";
            continue;
        }
    }
        
}