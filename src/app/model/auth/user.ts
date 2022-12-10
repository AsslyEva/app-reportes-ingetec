export class User {
    userCode:        number = 0;
    dni:             string = "";
    fullName:        string = "";
    name:            string = "";
    fatherLastName:  string = "";
    motherLastName:  string = "";
    modality:        string = "";
    modalityCode:    number = 0;
    payrollGroup:    string = "";
    contactNumber:   string | null = "";
    email:           string | null = "";
    networkUser:     string = "";
    zone:            string = "";
    area:            string = "";
    areaCode:        number = 0;
    gender:          string = "";
    authorities:           string[] = [];
}