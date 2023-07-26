export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Events: {
        Row: {
          created_at: string
          description: string | null
          end: string
          id: number
          name: string
          start: string
          user_id: number
          week_day: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          end: string
          id?: number
          name: string
          start: string
          user_id: number
          week_day: number
        }
        Update: {
          created_at?: string
          description?: string | null
          end?: string
          id?: number
          name?: string
          start?: string
          user_id?: number
          week_day?: number
        }
        Relationships: [
          {
            foreignKeyName: "Events_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Users: {
        Row: {
          created_at: string
          first_name: string
          id: number
          is_active: boolean
          last_name: string
          phone_number: string
        }
        Insert: {
          created_at?: string
          first_name: string
          id?: number
          is_active?: boolean
          last_name: string
          phone_number: string
        }
        Update: {
          created_at?: string
          first_name?: string
          id?: number
          is_active?: boolean
          last_name?: string
          phone_number?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
