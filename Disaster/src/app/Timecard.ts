export class Timecard {
    constructor(
        public code: String,
        public contractor: String,
        public totalHours: Number,
        public totalAmount: Number,
        public approved: boolean
    ) { }
}