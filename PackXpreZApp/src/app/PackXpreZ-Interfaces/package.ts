export interface IPackage {
        transactionId: number;
        EmailId: string;
        Awbnumber: string;
        SenderAddr: string;
        PickUpTimeSlot: number;
        ReceiverAddr: string;
        PackageCost: number;
        PackagingRequired: boolean;
        Insurance: boolean;
        DeliveryMode: string;
        DeliveryStatus: string;
        ScheduledDate: Date;
        DeliveredDate: Date;
}
