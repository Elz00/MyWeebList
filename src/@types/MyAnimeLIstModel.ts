export default interface MyAnimeListModel {
    anime: AnimeModel[];
    myinfo: Info;
}

export interface AnimeModel {
    series_animedb_id: string;
    series_type: string;
    series_title: string;
    series_episodes: string;
    my_id: string;
    my_watched_episodes: string;
    my_start_date: string;
    my_finish_date: string;
    my_score: string;
    my_status: string;
    my_times_watched: string;
    my_tags: string;
    my_rewatching: string;
    my_rewatching_ep: string;
    update_on_import: string;
}

export interface Info {
    user_id: string;
    user_name: string;
    user_export_type: string;
    user_total_anime: string;
    user_total_watching: string;
    user_total_completed: string;
    user_total_onhold: string;
    user_total_dropped: string;
    user_total_plantowatch: string;
}