/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const user_controller_1 = __webpack_require__("./src/entities/user/user.controller.ts");
const parc_controller_1 = __webpack_require__("./src/entities/parc/parc.controller.ts");
const booking_controller_1 = __webpack_require__("./src/entities/booking/booking.controller.ts");
const user_service_1 = __webpack_require__("./src/entities/user/user.service.ts");
const parc_service_1 = __webpack_require__("./src/entities/parc/parc.service.ts");
const booking_service_1 = __webpack_require__("./src/entities/booking/booking.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const config_1 = __webpack_require__("./src/config.ts");
const user_model_1 = __webpack_require__("./src/entities/user/user.model.ts");
const booking_model_1 = __webpack_require__("./src/entities/booking/booking.model.ts");
const parc_model_1 = __webpack_require__("./src/entities/parc/parc.model.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_1.ConfigOptions),
            typeorm_1.TypeOrmModule.forFeature([user_model_1.UserModel, parc_model_1.ParcModel, booking_model_1.BookingModel])
        ],
        controllers: [user_controller_1.UserController, parc_controller_1.ParcController, booking_controller_1.BookingController],
        providers: [user_service_1.UserService, parc_service_1.ParcService, booking_service_1.BookingService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigOptions = void 0;
const booking_model_1 = __webpack_require__("./src/entities/booking/booking.model.ts");
const parc_model_1 = __webpack_require__("./src/entities/parc/parc.model.ts");
const user_model_1 = __webpack_require__("./src/entities/user/user.model.ts");
exports.ConfigOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5433,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'eurocamp_api',
    entities: [booking_model_1.BookingModel, parc_model_1.ParcModel, user_model_1.UserModel],
    synchronize: true,
    maxQueryExecutionTime: 1000,
    keepConnectionAlive: true
};


/***/ }),

/***/ "./src/entities/booking/booking.contracts.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingRequestContract = exports.AllBookingResponseContract = exports.BookingResponseDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class BookingResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingResponseDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingResponseDto.prototype, "user", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingResponseDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingResponseDto.prototype, "parc", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingResponseDto.prototype, "bookingdate", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingResponseDto.prototype, "comments", void 0);
exports.BookingResponseDto = BookingResponseDto;
class AllBookingResponseContract {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: AllBookingResponseContract }),
    tslib_1.__metadata("design:type", Array)
], AllBookingResponseContract.prototype, "data", void 0);
exports.AllBookingResponseContract = AllBookingResponseContract;
class BookingRequestContract {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingRequestContract.prototype, "user", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingRequestContract.prototype, "parc", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingRequestContract.prototype, "bookingdate", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], BookingRequestContract.prototype, "comments", void 0);
exports.BookingRequestContract = BookingRequestContract;


/***/ }),

/***/ "./src/entities/booking/booking.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const uuidv4_1 = __webpack_require__("uuidv4");
const flakey_api_interceptor_1 = __webpack_require__("./src/flakey-api.interceptor.ts");
const booking_contracts_1 = __webpack_require__("./src/entities/booking/booking.contracts.ts");
const booking_service_1 = __webpack_require__("./src/entities/booking/booking.service.ts");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const bookings = yield this.bookingService.findAllBookings();
            return {
                data: bookings.map((booking) => ({
                    id: booking.id,
                    user: booking.user,
                    parc: booking.parc,
                    bookingdate: booking.bookingdate,
                    comments: booking.comments,
                })),
            };
        });
    }
    create(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // create new booking
            const booking = yield this.bookingService.newBooking(Object.assign(Object.assign({}, payload), { id: (0, uuidv4_1.uuid)() }));
            return booking;
        });
    }
    getBooking(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const booking = yield this.bookingService.getBookingById(id);
            if (!booking) {
                throw new common_1.NotFoundException('Booking not found');
            }
            return booking;
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.bookingService.removeBooking(id);
            return;
        });
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiOkResponse)({ type: booking_contracts_1.AllBookingResponseContract }),
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(new flakey_api_interceptor_1.FlakeyApiInterceptor(0.9)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BookingController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: booking_contracts_1.AllBookingResponseContract }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], BookingController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: booking_contracts_1.BookingResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BookingController.prototype, "getBooking", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, swagger_1.ApiNoContentResponse)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], BookingController.prototype, "remove", null);
BookingController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('bookings'),
    (0, common_1.Controller)('bookings'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof booking_service_1.BookingService !== "undefined" && booking_service_1.BookingService) === "function" ? _a : Object])
], BookingController);
exports.BookingController = BookingController;


/***/ }),

/***/ "./src/entities/booking/booking.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingModel = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let BookingModel = class BookingModel {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], BookingModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], BookingModel.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], BookingModel.prototype, "parc", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], BookingModel.prototype, "bookingdate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], BookingModel.prototype, "comments", void 0);
BookingModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'bookings', schema: 'eurocamp' })
], BookingModel);
exports.BookingModel = BookingModel;


/***/ }),

/***/ "./src/entities/booking/booking.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const booking_model_1 = __webpack_require__("./src/entities/booking/booking.model.ts");
let BookingService = class BookingService {
    constructor(bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    findAllBookings() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.bookingRepository.find();
        });
    }
    getBookingById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.bookingRepository.createQueryBuilder().select().where('id = :id', { id }).getOne();
        });
    }
    newBooking(booking) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.bookingRepository.save(booking);
        });
    }
    removeBooking(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.bookingRepository.delete(id);
        });
    }
};
BookingService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(booking_model_1.BookingModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], BookingService);
exports.BookingService = BookingService;


/***/ }),

/***/ "./src/entities/parc/parc.contracts.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParcRequestContract = exports.AllParcResponseContract = exports.ParcResponseDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class ParcResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ParcResponseDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ParcResponseDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ParcResponseDto.prototype, "description", void 0);
exports.ParcResponseDto = ParcResponseDto;
class AllParcResponseContract {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: AllParcResponseContract }),
    tslib_1.__metadata("design:type", Array)
], AllParcResponseContract.prototype, "data", void 0);
exports.AllParcResponseContract = AllParcResponseContract;
class ParcRequestContract {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ParcRequestContract.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ParcRequestContract.prototype, "description", void 0);
exports.ParcRequestContract = ParcRequestContract;


/***/ }),

/***/ "./src/entities/parc/parc.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParcController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const uuidv4_1 = __webpack_require__("uuidv4");
const flakey_api_interceptor_1 = __webpack_require__("./src/flakey-api.interceptor.ts");
const parc_contracts_1 = __webpack_require__("./src/entities/parc/parc.contracts.ts");
const parc_service_1 = __webpack_require__("./src/entities/parc/parc.service.ts");
let ParcController = class ParcController {
    constructor(parcService) {
        this.parcService = parcService;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const parcs = yield this.parcService.findAll();
            return {
                data: parcs.map((parc) => ({
                    id: parc.id,
                    name: parc.name,
                    description: parc.description,
                })),
            };
        });
    }
    create(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const parc = yield this.parcService.newUser({
                id: (0, uuidv4_1.uuid)(),
                name: payload.name,
                description: payload.description,
            });
            return parc;
        });
    }
    getParc(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const parc = yield this.parcService.getById(id);
            if (!parc) {
                throw new common_1.NotFoundException('Parc not found');
            }
            return parc;
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.parcService.remove(id);
            return;
        });
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiOkResponse)({ type: parc_contracts_1.AllParcResponseContract }),
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ParcController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: parc_contracts_1.AllParcResponseContract }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ParcController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: parc_contracts_1.ParcResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, common_1.UseInterceptors)(new flakey_api_interceptor_1.FlakeyApiInterceptor(0.7)),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ParcController.prototype, "getParc", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, swagger_1.ApiNoContentResponse)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ParcController.prototype, "remove", null);
ParcController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('parcs'),
    (0, common_1.Controller)('parcs'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof parc_service_1.ParcService !== "undefined" && parc_service_1.ParcService) === "function" ? _a : Object])
], ParcController);
exports.ParcController = ParcController;


/***/ }),

/***/ "./src/entities/parc/parc.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParcModel = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let ParcModel = class ParcModel {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], ParcModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ParcModel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ParcModel.prototype, "description", void 0);
ParcModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'parcs', schema: 'eurocamp' })
], ParcModel);
exports.ParcModel = ParcModel;


/***/ }),

/***/ "./src/entities/parc/parc.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParcService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const parc_model_1 = __webpack_require__("./src/entities/parc/parc.model.ts");
let ParcService = class ParcService {
    constructor(parcRepository) {
        this.parcRepository = parcRepository;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.parcRepository.find();
        });
    }
    getById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.parcRepository.createQueryBuilder().select().where('id = :id', { id }).getOne();
        });
    }
    newUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.parcRepository.save(user);
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.parcRepository.delete(id);
        });
    }
};
ParcService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(parc_model_1.ParcModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ParcService);
exports.ParcService = ParcService;


/***/ }),

/***/ "./src/entities/user/user.contracts.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserContract = exports.AllUserResponseContract = exports.UserResponseDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class UserResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
exports.UserResponseDto = UserResponseDto;
class AllUserResponseContract {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: AllUserResponseContract }),
    tslib_1.__metadata("design:type", Array)
], AllUserResponseContract.prototype, "data", void 0);
exports.AllUserResponseContract = AllUserResponseContract;
class CreateUserContract {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserContract.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserContract.prototype, "email", void 0);
exports.CreateUserContract = CreateUserContract;


/***/ }),

/***/ "./src/entities/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const flakey_api_interceptor_1 = __webpack_require__("./src/flakey-api.interceptor.ts");
const user_contracts_1 = __webpack_require__("./src/entities/user/user.contracts.ts");
const user_service_1 = __webpack_require__("./src/entities/user/user.service.ts");
const uuidv4_1 = __webpack_require__("uuidv4");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.findAll();
            return {
                data: users.map((user) => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                })),
            };
        });
    }
    create(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.newUser({
                id: (0, uuidv4_1.uuid)(),
                name: payload.name,
                email: payload.email,
            });
            const newUser = yield this.userService.newUser(user).catch((err) => {
                throw new Error(err);
            });
            return newUser;
        });
    }
    getUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getById(id);
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            return user;
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userService.remove(id);
            return;
        });
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiOkResponse)({ type: user_contracts_1.AllUserResponseContract }),
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(new flakey_api_interceptor_1.FlakeyApiInterceptor(0.9)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: user_contracts_1.AllUserResponseContract }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, common_1.UseInterceptors)(new flakey_api_interceptor_1.FlakeyApiInterceptor(0.3)),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: user_contracts_1.UserResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "getUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, swagger_1.ApiNoContentResponse)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "remove", null);
UserController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/entities/user/user.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModel = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let UserModel = class UserModel {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "email", void 0);
UserModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)({ name: 'users', schema: 'eurocamp' })
], UserModel);
exports.UserModel = UserModel;


/***/ }),

/***/ "./src/entities/user/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const user_model_1 = __webpack_require__("./src/entities/user/user.model.ts");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find();
        });
    }
    getById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.createQueryBuilder().select().where('id = :id', { id }).getOne();
        });
    }
    newUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.save(user);
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete(id);
        });
    }
};
UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_model_1.UserModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/flakey-api.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlakeyApiInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const operators_1 = __webpack_require__("rxjs/operators");
let FlakeyApiInterceptor = class FlakeyApiInterceptor {
    constructor(failureRate) {
        this.failureRate = failureRate;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)(data => {
            if (Math.random() > this.failureRate) {
                throw new common_1.BadGatewayException();
            }
            return data;
        }));
    }
};
FlakeyApiInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [Number])
], FlakeyApiInterceptor);
exports.FlakeyApiInterceptor = FlakeyApiInterceptor;


/***/ }),

/***/ "../../libs/server/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bootstrapApp = exports.generateNestApp = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
function generateNestApp(app, name, globalPrefix) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const appExpress = app;
        appExpress.enableShutdownHooks();
        app
            .setGlobalPrefix(globalPrefix)
            .enableVersioning({
            type: common_1.VersioningType.URI,
            defaultVersion: '1',
            prefix: false,
        })
            .useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: false,
            exceptionFactory: (errors) => {
                const message = errors.map((error) => {
                    return error.constraints;
                });
                return new common_1.BadRequestException(message);
            },
        }));
        const config = new swagger_1.DocumentBuilder()
            .setTitle(name)
            .setDescription(`${name} API description`)
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    });
}
exports.generateNestApp = generateNestApp;
function bootstrapApp(app, name, globalPrefix) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const port = 8080;
        yield generateNestApp(app, name, globalPrefix);
        yield app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    });
}
exports.bootstrapApp = bootstrapApp;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "rxjs/operators":
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuidv4":
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const core_1 = __webpack_require__("@nestjs/core");
const server_1 = __webpack_require__("../../libs/server/src/index.ts");
const app_module_1 = __webpack_require__("./src/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        yield (0, server_1.bootstrapApp)(app, 'Engineering', 'api');
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map