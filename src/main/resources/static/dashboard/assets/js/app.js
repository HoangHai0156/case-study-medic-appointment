class App {
    static DOMAIN_SERVER = window.origin;
    static API_SERVER = this.DOMAIN_SERVER + '/api';

    static API_CUSTOMER = this.API_SERVER + '/customers';
    static API_DOCTOR = this.API_SERVER + '/doctors';
    static API_APPOINTMENT = this.API_SERVER + '/appointments';
    static API_MEDICAL_BILL = this.API_SERVER + '/medical-bills';
    static API_ROOM = this.API_SERVER + '/rooms';
    static API_SPECIALITY = this.API_SERVER + '/specialities';

    static API_LOCATION_REGION = 'https://vapi.vnappmob.com/api/province'
    static API_ROM = this.API_SERVER + '/rooms';
    static API_SPECIALITY = this.API_SERVER + '/specialities';

    static API_LOCATION_REGION = 'https://vapi.vnappmob.com/api/province'
    static API_JOB = "https://api-119.medpro.com.vn:5000/profession-mongo/get-all-by-partner"
    static API_ETHNIC = "https://api-119.medpro.com.vn:5000/nation-mongo/get-all-by-partner"

    static showDeleteConfirmDialog() {
        return Swal.fire({
            icon: 'warning',
            text: 'Are you sure you want to delete the selected data ?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it !',
            cancelButtonText: 'Cancel',
        });
    }

    static showSuccessAlert(t) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: t,
            showConfirmButton: false,
            timer: 1500
        })
    }

    static showErrorAlert(t) {
        Swal.fire({
            icon: 'error',
            title: 'Warning',
            text: t,
        });
    }
}

class LocationRegion {
    constructor(id, provinceId, provinceName, districtId, districtName, wardId, wardName, address) {
        this.id = id;
        this.provinceId = provinceId;
        this.provinceName = provinceName;
        this.districtId = districtId;
        this.districtName = districtName;
        this.wardId = wardId;
        this.wardName = wardName;
        this.address = address;
    }
}


class Doctor {
    constructor(id, fullName, email, nameGender, phone, birthDay, identityNumber, ethnic, locationRegion, userId, specialityId, levelName) {
        this.id = id;

        this.fullName = fullName;

        this.email = email;

        this.nameGender = nameGender;

        this.phone = phone;

        this.birthDay = birthDay;

        this.identityNumber = identityNumber;

        this.ethnic = ethnic;

        this.locationRegion = locationRegion;

        this.userId = userId;

        this.specialityId = specialityId;

        this.levelName = levelName;
    }

}

class Speciality {
    constructor(id, codeName, name) {
        this.id = id;
        this.codeName = codeName;
        this.name = name;
    }
}

class Room {
    constructor(id, specialityName, name, isAvailable) {
        this.id = id;
        this.specialityName = specialityName;
        this.name = name;
        this.isAvailable = isAvailable;
    }
}