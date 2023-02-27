export interface ISurveyDefinition {
    id: string,
    name: string,
    json: any,
    user : number
}



export var apiBaseAddress = 'http://localhost:8000/v1';